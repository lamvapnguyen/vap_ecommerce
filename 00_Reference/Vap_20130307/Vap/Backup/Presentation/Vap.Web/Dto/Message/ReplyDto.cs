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

namespace Vap.Web.Dto.Message
{
    public class ReplyDto
    {
        string subjectCD = string.Empty;

        public string SubjectCD
        {
            get { return subjectCD; }
            set { subjectCD = value; }
        }
        string replyMessage = string.Empty;

        public string ReplyMessage
        {
            get { return replyMessage; }
            set { replyMessage = value; }
        }
        public ReplyDto()
        {
            this.subjectCD = string.Empty;
            this.replyMessage = string.Empty;
        }
    }
}
