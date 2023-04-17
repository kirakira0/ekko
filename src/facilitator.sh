#!/bin/bash

node src/ekko.js examples/$1.ekko js

# Define path to ll file. 
path_to_ll="$(pwd)/output.ll"

llc -march=x86-64 $path_to_ll

# Assemble the generated assembly code into an object file.
as -o output.o output.s

# Link the object file with any necessary libraries and create an executable file.
clang -o output output.o -lc

./"output"