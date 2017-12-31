using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Vap.Core.Dto
{
    public class clsComboDto
    {
        string name = string.Empty;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        string value = string.Empty;

        public string Value
        {
            get { return this.value; }
            set { this.value = value; }
        }


        public clsComboDto() : this(string.Empty, string.Empty) { }

        public clsComboDto(string name, string value)
        {
            this.name = name;
            this.value = value;
        }
    }
}
