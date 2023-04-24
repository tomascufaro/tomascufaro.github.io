---
layout: post
title: "Basic Algorithms practice"
subtitle: "Basics search python algorithms are presented"
date: 2021-05-01 23:45:13 -0400
background: '/img/posts/algorithms/code.jpg'
---


# Algorithms practice 

In this post some Python basics search algorithms are presented. 
It can be found: binary search, recurrent binary search, and interpolation. 
The base code can be found [In this repo](https://github.com/tomascufaro/searchalgorithms_python)
Feel free to pull request other algorithms as well as investigations over this algorithms 
Some ideas that can be interesting to investigate:
- Passing different data sizes over each algorithms and time them. 
- Plotting the time for different data sizes and distribution 




[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/tomascufaro/searchalgorithms_python/blob/main/binary_search.ipynb)



```python
import timeit
import random 
import numpy as np
```

# Binary Search

An implementation of the binary search algorithm. For details will follow. A good summary can be found on Wikipedia: https://en.wikipedia.org/wiki/Binary_search_algorithm.

## Binary Search Implementation

conditions: should be used only for sorted arrays 


```python
def binary_search(array, value):
    ary = array
    min_idx = 0
    max_idx = len(array)
    
    while min_idx < max_idx:
        middle_idx = (min_idx + max_idx) // 2

        if array[middle_idx] == value:
            return middle_idx
        elif array[middle_idx] < value:
            min_idx = middle_idx + 1
        else:
            max_idx = middle_idx
            
    return None
```


```python
binary_search(array=[1, 2, 4, 7, 8, 10, 11],
                value=11)
```




    6




```python
binary_search(array=[1, 2, 4, 7, 8, 10, 11],
                value=99)
```


```python

# run same code 5 times to get measurable data
n = 1

# calculate total execution time
results = []
for x in [10, 100, 1000, 10000, 100000, 1000000]:
    array = np.random.randint(0, x*2, size=x)
    result = timeit.timeit(stmt='addition()', globals=globals(), number=n)
    results.append(result)

# calculate the execution time
# get the average execution time


```

## Binary Search using Recursion

Note that this implementation of recursive binary search deliberately avoid slicing the `array` (e.g., `array[:middle_idx]`), because slicing Python lists is expensive due to the random memory access. E.g., slicing a Python list with as `a_list[:k]` is an O(k) operation.


```python
def recursive_binary_search(array, value, start_idx=None, end_idx=None):
    
    len_ary = len(array)
    
    if start_idx is None:
        start_idx = 0
    if end_idx is None:
        end_idx = len(array) - 1
    
    if not len_ary or start_idx >= end_idx:
        return None
    
    middle_idx = (start_idx + end_idx) // 2
    if array[middle_idx] == value:
        return middle_idx

    elif array[middle_idx] > value:
        return recursive_binary_search(array, 
                                       value, 
                                       start_idx=start_idx,
                                       end_idx=middle_idx)
    else:
        return recursive_binary_search(array,
                                       value,
                                       start_idx=middle_idx + 1,
                                       end_idx=len_ary)
    return None
```


```python
recursive_binary_search(array=[],
                        value=1)
```


```python
recursive_binary_search(array=[1, 2, 4, 7, 8, 10, 11],
                        value=1)
```




    0




```python
recursive_binary_search(array=[1, 2, 4, 7, 8, 10, 11],
                        value=4)
```




    2




```python
recursive_binary_search(array=[1, 2, 4, 7, 8, 10, 11],
                        value=11)
```




    6




```python
recursive_binary_search(array=[1, 2, 4, 7, 8, 10, 11],
                        value=99)
```





[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/tomascufaro/searchalgorithms_python/blob/main/binary_tree_search.ipynb)

## binary tree 

A binary Search Tree is a node-based binary tree data structure which has the following properties:  

- The left subtree of a node contains only nodes with keys lesser than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
- The left and right subtree each must also be a binary search tree. 
- There must be no duplicate nodes.



```python
import timeit
import random 
import numpy as np
```

Function for searching in a binary tree class 


```python
# A utility function to search a given key in BST
def search(root,key):
	
	# Base Cases: root is null or key is present at root
	if root is None or root.val == key:
		return root

	# Key is greater than root's key
	if root.val < key:
		return search(root.right,key)

	# Key is smaller than root's key
	return search(root.left,key)

# This code is contributed by Bhavya Jain

```


    Failed to start the Kernel. 


    Kernel Python 3.9.6 64-bit is not usable. Check the Jupyter output tab for more information. 


    View Jupyter <a href='command:jupyter.viewOutput'>log</a> for further details.


- **Time complexity**: O(h), where h is the height of the BST.
- **Space complexity**: O(h), where h is the height of the BST. This is because the maximum amount of space needed to store the recursion stack would be h.


```python
# Python program to demonstrate
# insert operation in binary search tree

# A utility class that represents
# an individual node in a BST


class Node:
	def __init__(self, key):
        #this will be another node class type Node. That's how we build the recursive tree. 
		self.left = None
        #this will be or None or type Node 
		self.right = None
		self.val = key

# A utility function to insert
# a new node with the given key


def insert(root, key):
	if root is None:
		return Node(key)
	else:
		if root.val == key:
			return root
		elif root.val < key:
			root.right = insert(root.right, key)
		else:
			root.left = insert(root.left, key)
	return root

# A utility function to do inorder tree traversal


def inorder(root):
	if root:
		inorder(root.left)
		print(root.val)
		inorder(root.right)


# Driver program to test the above functions
# Let us create the following BST
# 50
# /	 \
# 30	 70
# / \ / \
# 20 40 60 80

r = Node(50)
r = insert(r, 30)
r = insert(r, 20)
r = insert(r, 40)
r = insert(r, 70)
r = insert(r, 60)
r = insert(r, 80)

# Print inoder traversal of the BST
inorder(r)

```

insertion using the loop 


```python
class GFG:
    @staticmethod
    def main(args):
        tree = BST()
        tree.insert(30)
        tree.insert(50)
        tree.insert(15)
        tree.insert(20)
        tree.insert(10)
        tree.insert(40)
        tree.insert(60)
        tree.inorder()
 
 
class Node:
    left = None
    val = 0
    right = None
 
    def __init__(self, val):
        self.val = val
 
 
class BST:
    root = None
 
    def insert(self, key):
        node = Node(key)
        if (self.root == None):
            self.root = node
            return
        prev = None
        temp = self.root
        while (temp != None):
            if (temp.val > key):
                prev = temp
                temp = temp.left
            elif(temp.val < key):
                prev = temp
                temp = temp.right
        if (prev.val > key):
            prev.left = node
        else:
            prev.right = node
 
    def inorder(self):
        temp = self.root
        stack = []
        while (temp != None or not (len(stack) == 0)):
            if (temp != None):
                stack.append(temp)
                temp = temp.left
            else:
                temp = stack.pop()
                print(str(temp.val) + " ", end="")
                temp = temp.right
 
 
if __name__ == "__main__":
    GFG.main([])
 
```



[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/tomascufaro/searchalgorithms_python/blob/main/interpolatio_search.ipynb)


Se recomienda aplicar este algoritmo:



cuando acceder al elemento buscado es muy costoso: el acceso a un elemento que se encuentra en la memoria es algo muy rápido. Pero, cuando se debe acceder a un elemento que está almacenado en un disco, el acceso se vuelve una tarea costosa, que demanda tiempo y recursos; y



cuando los elementos están ordenados según una distribución uniforme.

multiple interpolation search algorithm can be used: 
let's see how linear interpolation would give us the position of a particular element x 


The formula for pos can be derived as follows.

Let's assume that the elements of the array are linearly distributed. 

General equation of line : y = m*x + c.
y is the value in the array and x is its index.

Now putting value of lo,hi and x in the equation

- arr[hi] = m*hi+c ----(1)
- arr[lo] = m*lo+c ----(2)
- x = m*pos + c     ----(3)

- m = (arr[hi] - arr[lo] )/ (hi - lo)

subtracting eqxn (2) from (3)

- x - arr[lo] = m * (pos - lo)
- lo + (x - arr[lo])/m = pos
- pos = lo + (x - arr[lo]) *(hi - lo)/(arr[hi] - arr[lo])

Algorithm 
The rest of the Interpolation algorithm is the same except for the above partition logic. 

- Step1: In a loop, calculate the value of “pos” using the probe position formula. 
- Step2: If it is a match, return the index of the item, and exit. 
- Step3: If the item is less than arr[pos], calculate the probe position of the left  sub-array. Otherwise, calculate the same in the right sub-array.
- Step4: Repeat until a match is found or the sub-array reduces to zero.


```python
# Python3 program to implement
# interpolation search
# with recursion

# If x is present in arr[0..n-1], then
# returns index of it, else returns -1.


def interpolationSearch(arr, lo, hi, x):

	# Since array is sorted, an element present
	# in array must be in range defined by corner
	if (lo <= hi and x >= arr[lo] and x <= arr[hi]):

		# Probing the position with keeping
		# uniform distribution in mind.
		pos = lo + ((hi - lo) // (arr[hi] - arr[lo]) *
					(x - arr[lo]))

		# Condition of target found
		if arr[pos] == x:
			return pos

		# If x is larger, x is in right subarray
		if arr[pos] < x:
			return interpolationSearch(arr, pos + 1,
									hi, x)

		# If x is smaller, x is in left subarray
		if arr[pos] > x:
			return interpolationSearch(arr, lo,
									pos - 1, x)
	return -1

# Driver code


# Array of items in which
# search will be conducted
arr = [10, 12, 13, 16, 18, 19, 20,
	21, 22, 23, 24, 33, 35, 42, 47]
n = len(arr)

# Element to be searched
x = 18
index = interpolationSearch(arr, 0, n - 1, x)

if index != -1:
	print("Element found at index", index)
else:
	print("Element not found")

# This code is contributed by Hardik Jain

```

Time Complexity: O(log2(log2 n)) for the average case, and O(n) for the worst case 


Another approach 

This is the iteration approach for the interpolation search.

Step1: In a loop, calculate the value of “pos” using the probe position formula. 
Step2: If it is a match, return the index of the item, and exit. 
Step3: If the item is less than arr[pos], calculate the probe position of the left sub-array. Otherwise, calculate the same in the right sub-array. 
Step4: Repeat until a match is found or the sub-array reduces to zero.
Below is the implementation of the algorithm. 


```python
# Python equivalent of above C++ code
# Python program to implement interpolation search by using iteration approach
def interpolationSearch(arr, n, x):

	# Find indexes of two corners
	low = 0
	high = (n - 1)

	# Since array is sorted, an element present
	# in array must be in range defined by corner
	while low <= high and x >= arr[low] and x <= arr[high]:
		if low == high:
			if arr[low] == x:
				return low;
			return -1;

		# Probing the position with keeping
		# uniform distribution in mind.
		pos = int(low + (((float(high - low)/( arr[high] - arr[low])) * (x - arr[low]))))

		# Condition of target found
		if arr[pos] == x:
			return pos

		# If x is larger, x is in upper part
		if arr[pos] < x:
			low = pos + 1;

		# If x is smaller, x is in lower part
		else:
			high = pos - 1;
	
	return -1

# Main function
if __name__ == "__main__":
	# Array of items on whighch search will
	# be conducted.
	arr = [10, 12, 13, 16, 18, 19, 20, 21,
		22, 23, 24, 33, 35, 42, 47]
	n = len(arr)

	x = 18 # Element to be searched
	index = interpolationSearch(arr, n, x)

	# If element was found
	if index != -1:
		print ("Element found at index",index)
	else:
		print ("Element not found")

```

Time Complexity: O(log2(log2 n)) for the average case, and O(n) for the worst case 



