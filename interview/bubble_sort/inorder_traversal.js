//     1
//    / \ 
// null 2
//      /
//     3
// 中序遍历:左中右 一棵大树 递归的概念132
// 先序遍历：中左右132
// 后序遍历:左右中213
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let a1 = new TreeNode(1);
let a2 = new TreeNode(2);
let a3 = new TreeNode(3);
a1.right = a2;
a2.left = a3;

var inorderTraversal = function (root) {
  let arr = [];
  const inorder = root => {
    if(root === null) {
      return null;
    }
    inorder(root.left);
    arr.push(root);
    inorder(root.right);
  }
  inorder(root);
  return arr;
}

console.log(inorderTraversal(a1));


