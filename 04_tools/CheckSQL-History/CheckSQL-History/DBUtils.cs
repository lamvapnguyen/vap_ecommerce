using System.Data.OracleClient;

namespace CheckSQL_History
{
    class DBUtils
    {
        public static OracleConnection GetDBConnection(string host, string port, string sid, string user, string password)
        {
            return DBOracleUtils.GetDBOracleConnection(host, port, sid, user, password);
        }
    }
}
