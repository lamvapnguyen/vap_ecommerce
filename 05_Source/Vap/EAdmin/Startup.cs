using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Vap.EAdmin.Startup))]
namespace Vap.EAdmin
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
