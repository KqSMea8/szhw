//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace EmptyConsole.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class UserTable
    {
        public int u_Id { get; set; }
        public string u_OpenId { get; set; }
        public string u_Name { get; set; }
        public string u_NickName { get; set; }
        public string u_Picture { get; set; }
        public string u_Sex { get; set; }
        public Nullable<int> u_RoleId { get; set; }
        public string u_Mobile { get; set; }
        public string u_IdCard { get; set; }
        public Nullable<System.DateTime> u_BirthDay { get; set; }
        public string u_Province { get; set; }
        public string u_City { get; set; }
        public string u_District { get; set; }
        public string u_Signature { get; set; }
        public Nullable<decimal> u_Balance { get; set; }
        public string u_RecommendCode { get; set; }
        public Nullable<decimal> u_ConsumeMoney { get; set; }
        public Nullable<decimal> u_Point { get; set; }
        public Nullable<int> u_Status { get; set; }
        public System.DateTime u_Created_at { get; set; }
    }
}