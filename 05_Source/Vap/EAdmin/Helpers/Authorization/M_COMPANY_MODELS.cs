//   Author:     NTLam
//   Create Date: 07/01/2018

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Vap.EAdmin.Models;
using Vap.Core.Com;

namespace Vap.EAdmin.Helpers.Authorization
{
    public class M_COMPANY_MODELS
    {
        //DbContextTransaction trans = null;
        /// <summary>
        /// Get the M_COMPANY by COMPANY_CD
        /// </summary>
        public M_COMPANY GetCompanyById(string id)
        {
            using (var data = new DBHelpDataContext())
            {
                return data.M_COMPANY.FirstOrDefault(c => c.COMPANY_CD == id && c.DEL_FLG == false);
            }
        }
        /// <summary>
        /// Update M_COMPANY by COMPANY_CD and FormCollection
        /// </summary>
        public bool UpdateCompany(string id, FormCollection collection, int personCd)
        {
            using (var data = new DBHelpDataContext())
            {
                using (var dbContextTransaction = data.Database.BeginTransaction())
                {
                    try
                    {
                        var temp = data.M_COMPANY.FirstOrDefault(c => c.COMPANY_CD == id);
                        temp.COMPANY_NAME = collection["COMPANY_NAME"];
                        temp.COMPANY_ADDR1 = collection["COMPANY_ADDR1"];
                        temp.COMPANY_ADDR2 = collection["COMPANY_ADDR2"];
                        temp.COMPANY_PHONE = collection["COMPANY_PHONE"];
                        temp.COMPANY_FAX = collection["COMPANY_FAX"];
                        temp.COUNTRY_CD = collection["COUNTRY_CD"];
                        temp.GM_STAFF_CD = Common.ParseInt(collection["GM_STAFF_CD"]);
                        temp.CURRENCY_CD = collection["CURRENCY_CD"];
                        temp.CURRENCY_UNIT = Common.ParseInt(collection["CURRENCY_UNIT"]);
                        temp.UPDATE_DATE = DateTime.Now;
                        temp.UPDATE_PERSON_CD = personCd;
                        data.SaveChanges();
                        dbContextTransaction.Commit();
                        return true;
                    }
                    catch (Exception)
                    {
                        dbContextTransaction.Rollback();

                    }
                }
            }
            return true;
        }
        /// <summary>
        /// Get all companies.
        /// </summary>
        /// <returns>List M_COMPANY </returns>
        public List<M_COMPANY> GetAllCompanies()
        {
            using (var data = new DBHelpDataContext())
            {
                List<M_COMPANY> list = new List<M_COMPANY>();
                list = data.M_COMPANY.Where(o => o.DEL_FLG == false).ToList();
                return list;
            }
        }
        /// <summary>
        /// Get Country Name by companyCd.
        /// </summary>
        /// <returns>List M_COMPANY </returns>
        public string GetCountryByCompanyCd(string companyCd)
        {
            using (var data = new DBHelpDataContext())
            {
                string countryCd = data.M_COMPANY.FirstOrDefault(c => c.COMPANY_CD == companyCd).COUNTRY_CD;
                return data.M_COUNTRY.FirstOrDefault(c => c.COUNTRY_CD == countryCd).COUNTRY_NAME;
            }
        }
    }
}
