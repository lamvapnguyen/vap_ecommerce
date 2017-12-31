using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;

namespace Vap.Core.Dto
{
    public class clsComboListDto
    {
        string Name = "Name";
        string Value = "Value";
        List<clsComboDto> items = new List<clsComboDto>();
        public clsComboListDto(List<clsComboDto> items)
        {
            this.items = items;
        }

        public clsComboListDto(List<clsComboDto> items, clsComboDto newItem)
        {
            items.Insert(0, newItem);
            this.items = items;
        }

        /// <summary>
        /// To get select list
        /// </summary>
        /// <returns></returns>
        public List<SelectListItem> GetSelectList()
        {
            return new SelectList(items, this.Name, this.Value).ToList();
        }

        /// <summary>
        /// To get select list with selected value.
        /// </summary>
        /// <param name="selectedValue"></param>
        /// <returns></returns>
        public List<SelectListItem> GetSelectList(string selectedValue)
        {
            return new SelectList(items, this.Name, this.Value, selectedValue).ToList();
        }
    }
}
