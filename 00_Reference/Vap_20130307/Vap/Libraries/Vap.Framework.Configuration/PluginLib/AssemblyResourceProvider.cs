using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using System.Web.Caching;
using System.IO;
using System.Reflection;
using System.Collections;

namespace Vap.Framework.Configuration.PluginLib
{
    public class AssemblyResourceProvider : System.Web.Hosting.VirtualPathProvider
    {

        private bool IsAppResourcePath(string virtualPath)
        {
            String checkPath = VirtualPathUtility.ToAppRelative(virtualPath);
            return checkPath.StartsWith("~/Plugins/", StringComparison.InvariantCultureIgnoreCase);
        }

        public override bool FileExists(string virtualPath)
        {
            if (IsAppResourcePath(virtualPath))
            {
                string path = VirtualPathUtility.ToAppRelative(virtualPath);
                string[] parts = path.Split('/');
                string assemblyName = parts[2];
                string resourceName = parts[3];

                assemblyName = Path.Combine(HttpRuntime.BinDirectory, assemblyName);
                byte[] assemblyBytes = File.ReadAllBytes(assemblyName);
                Assembly assembly = Assembly.Load(assemblyBytes);

                if (assembly != null)
                {
                    string[] resourceList = assembly.GetManifestResourceNames();
                    bool found = Array.Exists(resourceList, delegate(string r) { return r.Equals(resourceName); });

                    return found;
                }
                return false;
            }
            else
                return base.FileExists(virtualPath);
        }

        public override VirtualFile GetFile(string virtualPath)
        {
            if (IsAppResourcePath(virtualPath))
                return new AssemblyResourceVirtualFile(virtualPath);
            else
                return base.GetFile(virtualPath);
        }

        public override CacheDependency GetCacheDependency(string virtualPath, IEnumerable virtualPathDependencies, DateTime utcStart)
        {
            if (IsAppResourcePath(virtualPath))
            {
                //string[] parts = virtualPath.Split('/');
                //string assemblyName = parts[2];

                //assemblyName = Path.Combine(_PluginDirectory, assemblyName);

                //return new CacheDependency(assemblyName);
                return null;
            }
            return base.GetCacheDependency(virtualPath, virtualPathDependencies, utcStart);
        }
    }
}

