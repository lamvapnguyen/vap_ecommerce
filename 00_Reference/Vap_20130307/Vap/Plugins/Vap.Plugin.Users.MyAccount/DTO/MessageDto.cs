using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace Vap.Plugin.Users.MyAccount.DTO
{
    public class MessageDto
    {
        public string MessageCD { get; set; }

        //[Required]
        //[DataType(DataType.Password)]
        //[DisplayName("Subject")]
        //public string Subject { get; set; }

        [Required]
        [DisplayName("Sender")]
        public string SenderName { get; set; } /*Name of sender*/

        [DisplayName("Sender ID")]
        public int SenderID { get; set; } /*Person ID*/

        [Required]
        [DisplayName("To")]
        public string MailTo { get; set; } /*Mail to many: ";" to seperate*/

        [Required]
        [DisplayName("Content")]
        public string Content { get; set; }

       
        [DisplayName("Is Read")]
        public bool IsRead { get; set; }

        [DisplayName("Number of Read")]
        public int NumberUnRead { get; set; } /*Number of message are unread*/

        public bool HasAttachment { get; set; }

        string subjectCD = string.Empty;

        public string SubjectCD
        {
            get { return subjectCD; }
            set { subjectCD = value; }
        }
        string subjectName = string.Empty;

        public string SubjectName
        {
            get { return subjectName; }
            set { subjectName = value; }
        }

        DateTime sentDate = DateTime.Now;

        public DateTime SentDate
        {
            get { return sentDate; }
            set { sentDate = value; }
        }


    }
}
