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
    
    public partial class StaffTask
    {
        public int st_Id { get; set; }
        public int st_StaffId { get; set; }
        public int st_Year { get; set; }
        public int st_Month { get; set; }
        public decimal st_Money { get; set; }
        public Nullable<int> st_AddStaffId { get; set; }
        public Nullable<System.DateTime> st_AddTime { get; set; }
        public Nullable<int> st_Status { get; set; }
    }
}