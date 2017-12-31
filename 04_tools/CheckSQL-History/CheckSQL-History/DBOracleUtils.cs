using System.Data.OracleClient;

namespace CheckSQL_History
{
    class DBOracleUtils
    {
        public static OracleConnection GetDBOracleConnection(string host, string port, string sid, string user, string password)
        {
                string strO = "Data Source=(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = "
              + host + ")(PORT = " + port + "))(CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = "
              + sid + ")));Password=" + password + ";User ID=" + user;
                OracleConnection cn = new OracleConnection();
                cn.ConnectionString = strO;
                return cn;
        }
    }
}
