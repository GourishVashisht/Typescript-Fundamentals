class box {
    candies: string[] = []
    constructor(item: string) {
        this.candies.push(item)
    }
}

class smallbox extends box {
    constructor(candie: string) {
        // super has to be the first call in the derived class constructor
        super(candie)

    }
}

// In TypeScript, each member is public by default.
// A constructor may also be marked protected. This means that the class cannot be instantiated
// outside of its containing class, but can be extended.