using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EComm.Startup))]
namespace EComm
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
