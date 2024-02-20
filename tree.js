/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let total = this.root.val;

    function sumHelper(node) {
      for (let child of node.children){
        total = total + child.val;
        if (child.children.length > 0 ) {
          sumHelper(child);
        }
      }
    }
    sumHelper(this.root);
    return total;
  }

  
  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    
    let evenCount = this.root.val % 2 === 0 ? 1 : 0;

    function countEvenHelper(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0 ) {
          evenCount = evenCount + 1;
        }
        if (child.children.length > 0 ) {
          countEvenHelper(child);
        }
      } 
    }
    countEvenHelper(this.root);
    return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let greaterThanLowerCount = this.root.val > lowerBound ? 1 : 0;

    function lowerBoundCountHelper(node) {
      for (let child of node.children) {
        if (child.val > lowerBound ) {
          greaterThanLowerCount = greaterThanLowerCount + 1;
        }
        if (child.children.length > 0 ) {
          lowerBoundCountHelper(child);
        }
      } 
    }
  
    lowerBoundCountHelper(this.root);
    return greaterThanLowerCount;
  
    }
  }

module.exports = { Tree, TreeNode };

