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
    
    public partial class FriendRelationTable
    {
        public int fr_Id { get; set; }
        public Nullable<int> fr_UserId { get; set; }
        public Nullable<int> fr_FriendId { get; set; }
        public Nullable<int> fr_Status { get; set; }
        public string fr_Remark { get; set; }
        public Nullable<int> fr_Sequence { get; set; }
        public Nullable<System.DateTime> fr_AddTime { get; set; }
    }
}
