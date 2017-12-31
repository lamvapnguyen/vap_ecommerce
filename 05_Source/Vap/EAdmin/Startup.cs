using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EAdmin.Startup))]
namespace EAdmin
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
