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
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Vap.Plugin.Users.MyAccount.DTO
{
    public class SubjectDto
    {
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
        bool isPrivateMessage = false;

        public bool IsPrivateMessage
        {
            get { return isPrivateMessage; }
            set { isPrivateMessage = value; }
        }
        DateTime createDate = DateTime.Now;

        public DateTime CreateDate
        {
            get { return createDate; }
            set { createDate = value; }
        }
        int createUserId = 0;

        public int CreateUserId
        {
            get { return createUserId; }
            set { createUserId = value; }
        }

        DateTime lastedMessageDate = DateTime.Now;

        public DateTime LastedMessageDate
        {
            get { return lastedMessageDate; }
            set { lastedMessageDate = value; }
        }

        public bool HasAttachment { get; set; }

        [Required]
        [DisplayName("Sender")]
        public string SenderName { get; set; } /*Name of sender*/


        [Required]
        [DisplayName("To")]
        public string MailTo { get; set; } /*Mail to many: ";" to seperate*/

        [Required]
        [DisplayName("Content")]
        public string Content { get; set; }


        [DisplayName("Sender ID")]
        public int SenderID { get; set; } /*Person ID*/

    }
}
