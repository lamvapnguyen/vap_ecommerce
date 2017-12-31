using System;
using System.Collections.Generic;
using System.Data;
using System.Data.OracleClient;
using System.Windows.Forms;

namespace CheckSQL_History
{
    public partial class frmCheckSQL : Form
    {
        public frmCheckSQL()
        {
            InitializeComponent();
        }


        private void btnRefresh1_Click(object sender, EventArgs e)
        {
            refreshServer1();
            if (checkWellFormServer1())
            {
                string host = txtHost1.Text;
                string port = txtPort1.Text;
                string sid = txtServerID1.Text;
                string user = txtUser1.Text.ToLower();
                string password = txtPassword1.Text.ToLower();

                OracleConnection conn = DBUtils.GetDBConnection(host, port, sid, user, password);
                try
                {
                    conn.Open();
                    OracleCommand cmd = new OracleCommand();
                    cmd.Connection = conn;
                    if (cmbStatement1.Text.Equals(""))
                    {
                        cmd.CommandText = "SELECT  sql_fulltext, last_active_time" +
                            " FROM v$sqlarea s, dba_users u"+
                            " WHERE s.parsing_user_id = u.user_id AND username = '"+txtUser1.Text.ToUpper()+"' AND PARSING_SCHEMA_NAME = '"+txtShema1.Text.ToUpper()+"'"+
                            " ORDER BY last_active_time DESC";
                        cmd.CommandType = CommandType.Text;
                    }
                    else
                    {
                        int cmType = 0;
                        if (cmbStatement1.Text.Equals("INSERT"))
                        {
                            cmType = 2;
                        } else if (cmbStatement1.Text.Equals("SELECT"))
                        {
                            cmType = 3;
                        }
                        else if (cmbStatement1.Text.Equals("UPDATE"))
                        {
                            cmType = 6;
                        }
                        else if (cmbStatement1.Text.Equals("DELETE"))
                        {
                            cmType = 7;
                        }
                        cmd.CommandText = "SELECT  sql_fulltext, last_active_time" +
                            " FROM v$sqlarea s, dba_users u" +
                            " WHERE  command_type = "+cmType.ToString()+" AND s.parsing_user_id = u.user_id AND username = '" + txtUser1.Text.ToUpper() + "' AND PARSING_SCHEMA_NAME = '" + txtShema1.Text.ToUpper() + "'" +
                            " ORDER BY last_active_time DESC";
                        cmd.CommandType = CommandType.Text;
                    }
                    try
                    {
                        OracleDataReader dr = cmd.ExecuteReader();
                        List<string> strList = new List<String>();
                        if (cmbFrom1.Text.Equals("") && cmbTo1.Text.Equals(""))
                        {
                            while (dr.Read())
                            {
                                DateTime dt = dr.GetDateTime(1);
                                DateTime dtCurren = DateTime.Now;
                                string strdate = dt.Date.ToString("d");
                                string strdateCurren = dtCurren.Date.ToString("d");

                                if (string.Equals(strdate, strdateCurren))
                                {
                                    string strTransaction = "(" + dr.GetDateTime(1) + ")" + " " + dr.GetString(0);
                                    strList.Add(strTransaction);
                                }

                            }
                        }
                        else if ((cmbFrom1.Text.Equals("") && !cmbTo1.Text.Equals(""))
                           || (!cmbFrom1.Text.Equals("") && cmbTo1.Text.Equals("")))
                        {
                            MessageBox.Show("Due to inadequate filtering conditions. Should be select all!");
                            while (dr.Read())
                            {

                                DateTime dt = dr.GetDateTime(1);
                                DateTime dtCurren = DateTime.Now;
                                string strdate = dt.Date.ToString("d");
                                string strdateCurren = dtCurren.Date.ToString("d");

                                if (string.Equals(strdate, strdateCurren))
                                {
                                    string strTransaction = "(" + dr.GetDateTime(1) + ")" + " " + dr.GetString(0);
                                    strList.Add(strTransaction);
                                }
                            }
                        }
                        else
                        {
                            while (dr.Read())
                            {
                                DateTime dt = dr.GetDateTime(1);
                                TimeSpan ts = dt.TimeOfDay;
                                DateTime dtCurren = DateTime.Now;

                                string strdate = dt.Date.ToString("d");
                                string strdateCurren = dtCurren.Date.ToString("d");

                                TimeSpan tsFrom = new TimeSpan(int.Parse(cmbFrom1.Text), ToSeconds(cmbFrom1_2.Text), 00);
                                TimeSpan tsTo = new TimeSpan(int.Parse(cmbTo1.Text), ToSeconds(cmbTo1_2.Text), 00);
                                if (string.Equals(strdate, strdateCurren))
                                {
                                    if ((TimeSpan.Compare(ts, tsFrom) == 1 || TimeSpan.Compare(ts, tsFrom) == 0)
                                    && (TimeSpan.Compare(ts, tsTo) == -1 || TimeSpan.Compare(ts, tsTo) == 0))
                                    {
                                        string strTransaction = "(" + dr.GetDateTime(1) + ")" + " " + dr.GetString(0);
                                        strList.Add(strTransaction);
                                    }
                                }
                            }
                        }
                        if (strList.Count == 0)
                        {
                            MessageBox.Show("Transaction not found with these conditions!");
                        }
                        else
                        {
                            cmbTransaction1.DataSource = strList;
                        }

                        conn.Close();
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(ex.Message);
                    }                                 
                }
                catch (Exception ex)
                {
                    //MessageBox.Show("Can not connect to server. Please check the!");
                    MessageBox.Show(ex.Message);
                }
            }
        }

        private void btnRefresh2_Click(object sender, EventArgs e)
        {
            refreshServer2();
            if (checkWellFormServer2())
            {
                string host = txtHost2.Text;
                string port = txtPort2.Text;
                string sid = txtServerID2.Text;
                string user = txtUser2.Text.ToLower();
                string password = txtPassword2.Text.ToLower();

                OracleConnection conn = DBUtils.GetDBConnection(host, port, sid, user, password);
                try
                {
                    conn.Open();
                    OracleCommand cmd = new OracleCommand();
                    cmd.Connection = conn;
                    if (cmbStatement2.Text.Equals(""))
                    {
                        cmd.CommandText = "SELECT  sql_fulltext, last_active_time" +
                            " FROM v$sqlarea s, dba_users u" +
                            " WHERE s.parsing_user_id = u.user_id AND username = '" + txtUser2.Text.ToUpper() + "' AND PARSING_SCHEMA_NAME = '" + txtShema2.Text.ToUpper() + "'" +
                            " ORDER BY last_active_time DESC";
                        cmd.CommandType = CommandType.Text;
                    }
                    else
                    {
                        int cmType = 0;
                        if (cmbStatement2.Text.Equals("INSERT"))
                        {
                            cmType = 2;
                        }
                        else if (cmbStatement2.Text.Equals("SELECT"))
                        {
                            cmType = 3;
                        }
                        else if (cmbStatement2.Text.Equals("UPDATE"))
                        {
                            cmType = 6;
                        }
                        else if (cmbStatement2.Text.Equals("DELETE"))
                        {
                            cmType = 7;
                        }
                        cmd.CommandText = "SELECT  sql_fulltext, last_active_time" +
                            " FROM v$sqlarea s, dba_users u" +
                            " WHERE  command_type = " + cmType.ToString() + " AND s.parsing_user_id = u.user_id AND username = '" + txtUser2.Text.ToUpper() + "' AND PARSING_SCHEMA_NAME = '" + txtShema2.Text.ToUpper() + "'" +
                            " ORDER BY last_active_time DESC";
                        cmd.CommandType = CommandType.Text;
                    }
                    OracleDataReader dr = cmd.ExecuteReader();
                    string strTransaction = "";
                    List<string> strList = new List<String>();
                    if (cmbFrom2.Text.Equals("") && cmbTo2.Text.Equals(""))
                    {
                        while (dr.Read())
                        {
                            DateTime dt = dr.GetDateTime(1);
                            DateTime dtCurren = DateTime.Now;
                            string strdate = dt.Date.ToString("d");
                            string strdateCurren = dtCurren.Date.ToString("d");

                            if (string.Equals(strdate, strdateCurren))
                            {
                                strTransaction = "(" + dr.GetDateTime(1) + ")" + " " + dr.GetString(0);
                                strList.Add(strTransaction);
                            }
                        }
                    }
                    else if ((cmbFrom2.Text.Equals("") && !cmbTo2.Text.Equals(""))
                       || (!cmbFrom2.Text.Equals("") && cmbTo2.Text.Equals("")))
                    {
                        MessageBox.Show("Due to inadequate filtering conditions. Should be select all!");
                        while (dr.Read())
                        {
                            DateTime dt = dr.GetDateTime(1);
                            DateTime dtCurren = DateTime.Now;
                            string strdate = dt.Date.ToString("d");
                            string strdateCurren = dtCurren.Date.ToString("d");

                            if (string.Equals(strdate, strdateCurren))
                            {
                                strTransaction = "(" + dr.GetDateTime(1) + ")" + " " + dr.GetString(0);
                                strList.Add(strTransaction);
                            }
                        }
                    }
                    else
                    {
                        while (dr.Read())
                        {

                            DateTime dt = dr.GetDateTime(1);
                            TimeSpan ts = dt.TimeOfDay;
                            DateTime dtCurren = DateTime.Now;

                            string strdate = dt.Date.ToString("d");
                            string strdateCurren = dtCurren.Date.ToString("d");

                            TimeSpan tsFrom = new TimeSpan(int.Parse(cmbFrom2.Text), ToSeconds(cmbFrom2_2.Text), 00);
                            TimeSpan tsTo = new TimeSpan(int.Parse(cmbTo2.Text), ToSeconds(cmbTo2_2.Text), 00);
                            if (string.Equals(strdate, strdateCurren))
                            {
                                if ((TimeSpan.Compare(ts, tsFrom) == 1 || TimeSpan.Compare(ts, tsFrom) == 0)
                                    && (TimeSpan.Compare(ts, tsTo) == -1 || TimeSpan.Compare(ts, tsTo) == 0))
                                {
                                    strTransaction = "(" + dr.GetDateTime(1) + ")" + " " + dr.GetString(0);
                                    strList.Add(strTransaction);
                                }
                            }
                               
                        }
                    }
                    if (strList.Count == 0)
                    {
                        MessageBox.Show("Transaction not found with these conditions!");
                    }
                    else
                    {
                        cmbTransaction2.DataSource = strList;
                    }
                    conn.Close();

                }
                catch (Exception)
                {
                    MessageBox.Show("Can not connect to server. Please check the!");
                }
            }  
        }

        
        private bool checkWellFormServer1()
        {
            bool kq = true;
            if (txtHost1.Text.Equals(""))
            {
                lbHost1.Visible = true;
                txtHost1.Focus();
                kq = false;
            }
            if (txtPort1.Text.Equals(""))
            {
                lbPort1.Visible = true;
                txtPort1.Focus();
                kq = false;
            }
            if (txtServerID1.Text.Equals(""))
            {
                lbServerID1.Visible = true;
                txtServerID1.Focus();
                kq = false;
            }
            if (txtUser1.Text.Equals(""))
            {
                lbUser1.Visible = true;
                txtUser1.Focus();
                kq = false;
            }
            if (txtPassword1.Text.Equals(""))
            {
                lbPassword1.Visible = true;
                txtPassword1.Focus();
                kq = false;
            }
            if (txtShema1.Text.Equals(""))
            {
               lbShema1.Visible = true;
                txtShema1.Focus();
                kq = false;
            }

            return kq;
        }
        private bool checkWellFormServer2()
        {
            bool kq = true;
            if (txtHost2.Text.Equals(""))
            {
                lbHost2.Visible = true;
                txtHost2.Focus();
                kq = false;
            }
            if (txtPort2.Text.Equals(""))
            {
                lbPort2.Visible = true;
                txtPort2.Focus();
                kq = false;
            }
            if (txtServerID2.Text.Equals(""))
            {
                lbServerID2.Visible = true;
                txtServerID2.Focus();
                kq = false;
            }
            if (txtUser2.Text.Equals(""))
            {
                lbUser2.Visible = true;
                txtUser2.Focus();
                kq = false;
            }
            if (txtPassword2.Text.Equals(""))
            {
                lbPassword2.Visible = true;
                txtPassword2.Focus();
                kq = false;
            }
            if (txtShema2.Text.Equals(""))
            {
                lbShema2.Visible = true;
                txtShema2.Focus();
                kq = false;
            }

            return kq;
        }
        private void refreshServer1()
        {
            cmbTransaction1.Text = "";
            lbHost1.Visible = false;
            lbPort1.Visible = false;
            lbServerID1.Visible = false;
            lbUser1.Visible = false;
            lbPassword1.Visible = false;
            lbShema1.Visible = false;
        }

        private void refreshServer2()
        {
            cmbTransaction2.Text = "";
            lbHost2.Visible = false;
            lbPort2.Visible = false;
            lbServerID2.Visible = false;
            lbUser2.Visible = false;
            lbPassword2.Visible = false;
            lbShema2.Visible = false;
        }   

        private int ToSeconds(string str)
        {
            if (str.Equals(""))
            {
                return 00;
            }
            else
            {
                return int.Parse(str);
            }
        }

        private void cmbFrom1_SelectedIndexChanged(object sender, EventArgs e)
        {
            cmbTransaction1.DataSource = null;
            richTextBox1.Text = "";
            if (!cmbFrom1.Text.Equals(""))
            {
                cmbFrom1_2.Enabled = true;
            }
            else
            {
                cmbFrom1_2.Enabled = false;
                cmbFrom1_2.Text = null;
            }
        }

        private void cmbFrom1_2_SelectedIndexChanged(object sender, EventArgs e)
        {
            cmbTransaction1.DataSource = null;
        }

        private void cmbTo1_SelectedIndexChanged(object sender, EventArgs e)
        {
            cmbTransaction1.DataSource = null;
            richTextBox1.Text = "";
            if (!cmbTo1.Text.Equals(""))
            {
                cmbTo1_2.Enabled = true;
            }
            else
            {
                cmbTo1_2.Enabled = false;
                cmbTo1_2.Text = null;
            }
        }

        private void cmbTo1_2_SelectedIndexChanged(object sender, EventArgs e)
        {
            cmbTransaction1.DataSource = null;
        }

        private void cmbFrom2_SelectedIndexChanged(object sender, EventArgs e)
        {
            cmbTransaction2.DataSource = null;
            richTextBox2.Text = "";
            if (!cmbFrom2.Text.Equals(""))
            {
                cmbFrom2_2.Enabled = true;
            }
            else
            {
                cmbFrom2_2.Enabled = false;
                cmbFrom2_2.Text = null;
            }
        }

        private void cmbFrom2_2_SelectedIndexChanged(object sender, EventArgs e)
        {
            cmbTransaction2.DataSource = null;
        }

        private void cmbTo2_SelectedIndexChanged(object sender, EventArgs e)
        {
            cmbTransaction2.DataSource = null;
            richTextBox2.Text = "";
            if (!cmbTo2.Text.Equals(""))
            {
                cmbTo2_2.Enabled = true;
            }
            else
            {
                cmbTo2_2.Enabled = false;
                cmbTo2_2.Text = null;
            }
        }

        private void cmbTo2_2_SelectedIndexChanged(object sender, EventArgs e)
        {
            cmbTransaction2.DataSource = null;
        }

        private void cmbTransaction1_SelectedIndexChanged(object sender, EventArgs e)
        {
            StringUtility format = new StringUtility();
            richTextBox1.Text = format.FomatString(cmbTransaction1.Text);
            lbCompareResult.Text = "";
        }

        private void cmbTransaction2_SelectedIndexChanged(object sender, EventArgs e)
        {
            StringUtility format = new StringUtility();
            richTextBox2.Text = format.FomatString(cmbTransaction2.Text);
            lbCompareResult.Text = "";
        }

        private void btnCompare_Click(object sender, EventArgs e)
        {
            if(richTextBox1.Text.Equals("") || richTextBox2.Text.Equals(""))
            {
                lbCompareResult.Text = string.Format("Compare failed. Please select statements!");
            }
            else if (richTextBox1.Text.Equals(richTextBox2.Text))
            {
                lbCompareResult.Text = string.Format("OK");
            }
            else
            {
                lbCompareResult.Text = string.Format("NG");
            }
        }

        private void cmbStatement1_SelectedIndexChanged(object sender, EventArgs e)
        {
            cmbTransaction1.DataSource = null;
        }

        private void cmbStatement2_SelectedIndexChanged(object sender, EventArgs e)
        {
            cmbTransaction2.DataSource = null;
        }

        private void frmCheckSQL_Load(object sender, EventArgs e)
        {

        }
    }
}
