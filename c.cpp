#include <iostream>
using namespace std;

int main() {
    int N;
    cin >> N;
    for (int i = 1; i <= N; i ++) {
        if (i % 3 == 0 && i % 5 != 0) {
            cout << "Fizz";
        }
        else if (i % 5 == 0 && i % 3 != 0) {
            cout << "Buzz";
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            cout << "FizzBuzz";
        }
        else {
            cout << i;
        }
        cout << endl;
    }
    return 0;
}