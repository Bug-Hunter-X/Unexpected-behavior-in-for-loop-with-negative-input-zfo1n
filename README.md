# Unexpected Behavior in TypeScript For Loop

This repository demonstrates an unexpected behavior encountered when using a `for` loop in TypeScript with a negative input.

## Bug Description

The `printNumbers` function is designed to print numbers from 1 to `n`. When a positive number is passed as input, it functions as expected. However, when a negative number is passed, the loop does not execute, resulting in no output.  This is unexpected; one might expect an error or perhaps an empty output.

## Solution

The solution involves adding a check to handle negative input, preventing unexpected behavior.