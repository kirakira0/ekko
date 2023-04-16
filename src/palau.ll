@.str = private unnamed_addr constant [14 x i8] c"Hello, Palau!\00"

declare i32 @puts(i8*)

define i32 @main() {
  %1 = getelementptr [14 x i8], [14 x i8]* @.str, i32 0, i32 0
  call i32 @puts(i8* %1)
  ret i32 0
}