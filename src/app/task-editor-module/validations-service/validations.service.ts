export class ValidationsService {

    validatableProps;
    pattern = new RegExp(/.*\S.*/);
    resolved = false;
    errors = false;

    validate(val: {title: string, desc: string}) {
        return this.mapDefaults(val);
    }

    mapDefaults(val) {
        this.validatableProps = {...val};
        Object.keys(this.validatableProps).map((item) => {
            this.validatableProps[item] = false;
        });
        return this.iterateFields(val);
    }

    iterateFields(val) {
        for (const key of Object.keys(val)) {
            this.validateField(val[key], key);
       }
        this.onValidatedFields();
    }

    validateField(value, key) {
        this.validatableProps[key] = this.pattern.test(value);
    }

    onValidatedFields() {
        const results = Object.values(this.validatableProps).filter((value, index) => {
           return value === true;
        });
        return this.checkOut(results);
    }

    checkOut(results) {
        results.length === Object.values(this.validatableProps).length ? this.resolve() : this.reject();
    }

    resolve() {
        this.resolved = true;
        this.errors = false;
    }

    reject() {
        this.resolved = false;
        this.errors = true;
    }

}
