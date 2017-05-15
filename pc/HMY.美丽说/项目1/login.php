<?php
    $result=mysql_connect("localhost","root","");
    if($result){
        $db=mysql_select_db("ajax");
        if($db)
        {
            $data=mysql_query("select * from stu where name="+$_GET['name']);
            if(mysql_num_rows($data))
            {
                $row=mysql_fetch_row($data);
                echo "用户名:".$row[1]."密码:".$row[2];
            }
            else{
                echo "选择数据库失败";
            }


        }
        else
        {
          echo "链接数据库失败";
        }
    }


