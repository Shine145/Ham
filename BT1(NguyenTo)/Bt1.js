function kiem_tra_snt(n) {

    var x = true;

    if (n < 2) {
        x = false;
    } else {
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                x = false;
                break;
            }
        }
    }
    if (x == true) {
        return (n + " là số nguyên tố");
    } else {
        return (n + " không phải là số nguyên tố");
    }
}