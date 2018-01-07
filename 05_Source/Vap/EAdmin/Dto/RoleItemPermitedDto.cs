namespace Vap.EAdmin.Dto
{
    public class RoleItemPermitedDto
    {
        public int menuCd { get; set; }
        public string menuName { get; set; }
        public int acessMethod { get; set; }
        /*
         * 0: No access
         * 1: Readonly
         * 2: full access.
         */


    }
}
