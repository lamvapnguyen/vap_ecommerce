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
using Vap.Settings.Enums;

namespace Vap.Web.Dto.Message
{
    public class FolderDto
    {
        EnumScreenMode mode = EnumScreenMode.Show;

        public EnumScreenMode Mode
        {
            get { return mode; }
            set { mode = value; }
        }

        string folderCD = string.Empty;


        //[Required]
        [DisplayName("Folder code")]
        public string FolderCD
        {
            get { return folderCD; }
            set { folderCD = value; }
        }

        string folderName = string.Empty;

        [Required]
        [DisplayName("Folder Name")]
        public string FolderName
        {
            get { return folderName; }
            set { folderName = value; }
        }

        int folderType = 0;

        public int FolderType
        {
            get { return folderType; }
            set { folderType = value; }
        }

        bool delFlg = false;


        public bool DelFlg
        {
            get { return delFlg; }
            set { delFlg = value; }
        }

        DateTime createDate = DateTime.Now;
        [DisplayName("Create Date")]
        public DateTime CreateDate
        {
            get { return createDate; }
            set { createDate = value; }
        }
        int createUserId = 0;

        [DisplayName("Create User ID")]
        public int CreateUserId
        {
            get { return createUserId; }
            set { createUserId = value; }
        }

        public FolderDto()
            : this(string.Empty, string.Empty, 0, false, DateTime.Now, 0, DateTime.Now, 0)
        { }

        public FolderDto(string folderCd, string folderName, int folderType, bool delFlg, DateTime createDate, int createUserId, DateTime updateDate, int updateUserId)
        {
            this.folderCD = folderCd;
            this.folderName = folderName;
            this.delFlg = delFlg;
            this.createDate = createDate;
            this.createUserId = createUserId;

        }

    }
}
