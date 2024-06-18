class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    //* search
    search() {
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
    }

    //* filter
    filter() {
        const queryCopy = { ...this.queryStr };

        //* removing some fields for category
        const removingFields = ["keyword", "page", "limit", "sort", "order"];
        removingFields.forEach((key) => delete queryCopy[key]);

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    //* sort
    sort() {
        const sortBy = this.queryStr.sort || '-createdAt'; // Default to sorting by newest first
        const sortOrder = this.queryStr.order || 'desc'; // Default to descending
        const sortField = sortBy.replace('-', '');
        const sortQuery = sortOrder === 'asc' ? sortField : `-${sortField}`;

        this.query = this.query.sort(sortQuery);
        return this;
    }

    //* pagination
    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);   //* limit and skip are MongoDB functions

        return this;
    }
}

module.exports = ApiFeatures;
