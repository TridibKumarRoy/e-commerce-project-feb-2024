class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;


    }

    //*srarch
    search() {
        // const key = Object.keys(this.queryStr).toString();
        // // console.log(key);
        // // console.log(this.queryStr[key]);
        // const val = this.queryStr[key];

        // // const keyword = this.queryStr.keyword  //* dosent work
        // const keyword = key
        // ? {
        //     name: {
        //         // $regex: this.queryStr.keyword,
        //         // $regex: key,
        //         $regex: val,
        //         $options: "i",
        //     },
        // }
        // : {};

        // // console.log(keyword);

        // this.query = this.query.find({ ...keyword });
        // return this;
        //!  


        const keyword = this.queryStr.keyword
            ? {
                name: {
                    $regex: this.queryStr.keyword,
                    $options: "i",
                },
            }
            : {};

        this.query = this.query.find({ ...keyword });
        return this;


        //!
    }


    //* filter
    filter() {
        const queryCopy = { ...this.queryStr }
        // console.log(queryCopy);

        //* removing same fields for category
        const removingFields = ["keyword", "page", "limit"];
        removingFields.forEach((key) => delete queryCopy[key]);

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage * (currentPage-1)

        this.query = this.query.limit(resultPerPage).skip(skip)   //*limit  and skip are mongodb function

        return this;
    }
}

module.exports = ApiFeatures;