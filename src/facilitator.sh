#!/bin/bash
# This is a simple bash script

# Print "Hello, World!" to the terminal
echo "facilitator" 

# read ekko file 

# syntax analysis 

# semantic analysis 

# ast --> llvm ir 


# Define path to ll file. 
path_to_ll="$(pwd)/$1.ll"

llc -march=x86-64 $path_to_ll

# Assemble the generated assembly code into an object file.
as -o $1.o $1.s

# Link the object file with any necessary libraries and create an executable file.
clang -o $1 $1.o -lc

./"$1"