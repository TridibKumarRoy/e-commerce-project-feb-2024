class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;


    }

    //*srarch
    search() {
        const key = Object.keys(this.queryStr).toString();
        console.log(key);
        console.log(this.queryStr[key]);
        const val = this.queryStr[key];
        
        // const keyword = this.queryStr.keyword  //* dosent work
        const keyword = key
        ? {
            name: {
                // $regex: this.queryStr.keyword,
                // $regex: key,
                $regex: val,
                $options: "i",
            },
        }
        : {};

        console.log(keyword);

        this.query = this.query.find({ ...keyword });
        return this;

    }
}

module.exports = ApiFeatures;