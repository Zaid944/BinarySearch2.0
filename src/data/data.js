export const problemList = [
  {
    sno: 1,
    difficulty: "Hard",
    like: 627,
    dislike: 9,
    id: "two-sum",
    status: "Todo",
    title: "Two Sum",
    topicTags: ["Array", "Hash Table"],
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
        explanation: "",
      },
    ],
    constraints: [
      "2 <= nums.length <= 1e4",
      "-1e9 <= nums[i] <= 1e9",
      "-1e9 <= target <= 1e9",
      "Only one valid answer exists.",
    ],
  },
  {
    sno: 2,
    difficulty: "Medium",
    id: "add-two-numbers",
    like: 281,
    dislike: 82,
    status: "Todo",
    title: "Add Two Numbers",
    topicTags: ["Linked List", "Math", "Recursion"],
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807.",
      },
      {
        input: "l1 = [0], l2 = [0]",
        output: "[0]",
        explanation: "",
      },
      {
        input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        output: "[8,9,9,9,0,0,0,1]",
        explanation: "",
      },
    ],
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9",
      "It is guaranteed that the list represents a number that does not have leading zeros.",
    ],
  },
];
