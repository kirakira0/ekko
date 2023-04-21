@str1 = private constant [3 x i8] c"Vi\00"
@str2 = private constant [5 x i8] c"Jinx\00"
@str3 = private constant [8 x i8] c"Caitlyn\00"

@strings = private constant [3 x i8*] [
    getelementptr inbounds ([3 x i8], [3 x i8]* @str1, i32 0, i32 0),
    getelementptr inbounds ([5 x i8], [5 x i8]* @str2, i32 0, i32 0),
    getelementptr inbounds ([8 x i8], [8 x i8]* @str3, i32 0, i32 0)
]

define i32 @main() {
    %string_ptr1 = getelementptr inbounds ([3 x i8*], [3 x i8*]* @strings, i32 0, i32 0)
    %string_ptr2 = getelementptr inbounds ([3 x i8*], [3 x i8*]* @strings, i32 0, i32 1)
    %string_ptr3 = getelementptr inbounds ([3 x i8*], [3 x i8*]* @strings, i32 0, i32 2)

    %string1 = load i8*, i8** %string_ptr1
    %string2 = load i8*, i8** %string_ptr2
    %string3 = load i8*, i8** %string_ptr3

    ; Use the strings as needed
    ; ...
    
    ret i32 0
}
