@.str = private unnamed_addr constant [11 x i8] c"Hello Jinx\00"
      
declare i32 @puts(i8*)

define i32 @main() {
    %1 = getelementptr [11 x i8], [11 x i8]* @.str, i32 0, i32 0
    call i32 @puts(i8* %1)
    ret i32 0
}