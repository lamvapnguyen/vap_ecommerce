//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Vap.EAdmin.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class T_EVALUATION
    {
        public string COMPANY_CD { get; set; }
        public int ASSESSMENT_YEAR { get; set; }
        public string ASSESSMENT_TYPE { get; set; }
        public string ASSESSMENT_CD { get; set; }
        public int FILE_ID { get; set; }
        public string YEARLY_GOAL { get; set; }
        public Nullable<int> EVALUATION_POINT_T1 { get; set; }
        public Nullable<int> EVALUATION_POINT_T2 { get; set; }
        public string EVALUATION_POINT_FINAL { get; set; }
        public string COMMENTS_T1 { get; set; }
        public string COMMENTS_T2 { get; set; }
        public string COMMENTS_FINAL { get; set; }
        public Nullable<bool> FINAL_FLG { get; set; }
        public string EVALUATION_RESULT { get; set; }
        public bool DEL_FLG { get; set; }
        public Nullable<System.DateTime> CREATE_DATE { get; set; }
        public Nullable<int> CREATE_PERSON_CD { get; set; }
        public Nullable<System.DateTime> UPDATE_DATE { get; set; }
        public Nullable<int> UPDATE_PERSON_CD { get; set; }
    
        public virtual T_FILETRACKING T_FILETRACKING { get; set; }
    }
}
