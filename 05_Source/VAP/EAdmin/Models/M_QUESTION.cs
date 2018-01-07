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
    
    public partial class M_QUESTION
    {
        public string QUES_ID { get; set; }
        public string QUES_CONTENT { get; set; }
        public string ANS_RIGHT { get; set; }
        public string ANS_A { get; set; }
        public string ANS_B { get; set; }
        public string ANS_C { get; set; }
        public string ANS_D { get; set; }
        public string ANS_E { get; set; }
        public string ANS_F { get; set; }
        public int RANK { get; set; }
        public int QUES_CATEGORY_ID { get; set; }
        public Nullable<int> QUES_TYPE_ID { get; set; }
        public Nullable<int> QUES_LEVEL_ID { get; set; }
        public Nullable<int> ORIGIN_ID { get; set; }
        public string HINT { get; set; }
        public string MORE_DETAIL { get; set; }
        public string DESCRIPTION { get; set; }
        public Nullable<int> QUES_MARK { get; set; }
        public Nullable<decimal> QUES_PARENT_ID { get; set; }
        public string COUNTRY_CD { get; set; }
        public Nullable<int> FILE_ID { get; set; }
    
        public virtual M_ORIGIN M_ORIGIN { get; set; }
        public virtual M_QUESTION_CATEGORY M_QUESTION_CATEGORY { get; set; }
        public virtual M_QUESTION_LEVEL M_QUESTION_LEVEL { get; set; }
        public virtual M_QUESTION_TYPE M_QUESTION_TYPE { get; set; }
    }
}