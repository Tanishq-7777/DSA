#include<bits/stdc++.h>
using namespace std;
// vector<int> bubbleSort(vector<int> &arr){
//     for(int i = 0; i<arr.size()-1; i++){
//         for(int j = 0; j<arr.size()-1-i; j++){
//             if(arr[j]>arr[j+1]){
//                 int temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// vector<int> selectionSort(vector<int> &arr){
//     for(int i = 0; i<arr.size()-1; i++){
//         int min = i;
//         for(int j = i+1 ; j<arr.size() ;j++){
//             if(arr[min] > arr[j]){
//                 min =  j;
//             }
//         }
//         if(min != i){
//             int temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
//     return arr;
// }
// vector<int> insertionSort(vector<int> &arr){
//     for(int i = 1; i< arr.size(); i++){
//       int j = i;
//       int prev = arr[i];
//       while(j>0 && prev<arr[j-1]){
//         arr[j] = arr[j-1];
//         j--;
//       }
//       arr[j] = prev;
//     }
//     return arr;
// }
// vector<int> mergeSort(vector<int> &arr){
//     vector<int> left = mergeSort()
// }
// int main() {
//     vector<int> arr = {9,8,7,2,3,4,5};
//     vector<int> result = insertionSort(arr);
//     for(int i :result){
//         cout<< i << " ";
//     }
// }
vector<int> mergeSorted(vector<int>& arr1, vector<int>& arr2) {
        int p1 = 0;
        int p2 = 0;
        vector<int> arr(arr1.size() + arr2.size());
        for (int i = 0; i <arr.size() ; i++) {
                if (p1 > arr1.size() || (p2<arr2.size() && (arr1[p1] > arr2[p2]))) {
                    arr[i] = arr2[p2];
                    p2++;
                } else {
                    arr[i] = arr1[p1];
                    p1++;
                }
        }
        return arr;
    }

int main(){
    vector<int> arr1 = {1,3,5};
    vector<int> arr2 = {2,4,6};
    vector<int> arr = mergeSorted(arr1,arr2);
    for(int i : arr){
        cout<<i;
    }
}