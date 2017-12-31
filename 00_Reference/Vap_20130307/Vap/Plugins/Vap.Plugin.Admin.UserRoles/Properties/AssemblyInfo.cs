using System.Reflection;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using Vap.Framework.Configuration.PluginLib;

// General Information about an assembly is controlled through the following 
// set of attributes. Change these attribute values to modify the information
// associated with an assembly.
[assembly: AssemblyTitle("Vap.Plugin.Admin.UserRoles")]
[assembly: AssemblyDescription("")]
[assembly: AssemblyConfiguration("")]
[assembly: AssemblyCompany("")]
[assembly: AssemblyProduct("Vap.Plugin.Admin.UserRoles")]
[assembly: AssemblyCopyright("Copyright ©  2012")]
[assembly: AssemblyTrademark("")]
[assembly: AssemblyCulture("")]

// Setting ComVisible to false makes the types in this assembly not visible 
// to COM components.  If you need to access a type in this assembly from 
// COM, set the ComVisible attribute to true on that type.
[assembly: ComVisible(false)]

// The following GUID is for the ID of the typelib if this project is exposed to COM
[assembly: Guid("8df7ae12-316b-4cdc-8c9b-f8b28b35ac9b")]

// Version information for an assembly consists of the following four values:
//
//      Major Version
//      Minor Version 
//      Build Number
//      Revision
//
// You can specify all the values or you can default the Revision and Build Numbers 
// by using the '*' as shown below:
[assembly: AssemblyVersion("1.0.0.0")]
[assembly: AssemblyFileVersion("1.0.0.0")]
[assembly: PluginViewLocations(
    new string[] { "~/Plugins/Vap.Plugin.Admin.UserRoles.dll/Vap.Plugin.Admin.UserRoles.Views.{1}.{0}.aspx" },
    true,
    action = "index",
    controller = "M0110",
    name = "User Role")]
