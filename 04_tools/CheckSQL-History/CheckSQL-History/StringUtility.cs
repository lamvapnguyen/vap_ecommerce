using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheckSQL_History
{
    class StringUtility
    {
        public string FomatString(string str)
        {
            int endIndex = str.IndexOf(")");
            string result = str.Substring(endIndex+1).Trim();
            return result;
        }
    }
}
