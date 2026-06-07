#include<bits/stdc++.h>
using namespace std;
string reverseString(string str,int k){
    for(int i = 0;i<str.size();i+=2*k){
        int start = i;
        int end = i+k-1;
        int mid = end-start+1;

        for(int x = 0; x<mid/2; x++){
            char temp = str[x+start];
            str[x+start] = str[end-x-1];
            str[end-x-1] = temp;
        }
    }
    return str;
}
int main(){
    string str = reverseString("abcdefghijklmn",3);
    for(char i: str){
        cout<<i<< " ";
    }
    return 0;
}