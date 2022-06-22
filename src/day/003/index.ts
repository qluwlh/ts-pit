type TreeNode = {
  value: string;
};
type LeafNode = TreeNode & { isLeaf: boolean };

type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode];
};

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string) {
  return {
    ...node,
    value: f(node.value),
  };
}

const a: TreeNode = { value: 'a' };
const b: LeafNode = { value: 'b', isLeaf: true };
const c: InnerNode = { value: 'b', children: [b] };

const a1 = mapNode(a, (res) => res);
const b1 = mapNode(b, (res) => res);
const c1 = mapNode(c, (res) => res);

const filterEmptySet = <T>(value: T): T | null => {
  if (value.length > 0) {
    return value;
  }
  return null;
};
