class ApiFeatures {
    constructor(query, querystr) {
        this.query = query;
        this.queryStr = querystr
    }
    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i",
            },
        } : {};
        this.query = this.query.find({ ...keyword });
        return this;
    }
    filter() {
        const queryCopy = { ...this.queryStr }
        console.log(queryCopy);

        // Remove somefields for category
        const removeFields = ["keyword", "page", "limit"];
        removeFields.forEach(key => delete queryCopy[key]);

        // Filter for prize and rating
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,key => `$${key}`);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1; // 50 - 10
        const skip = resultPerPage * (currentPage -1);
        this.query = this.query.limit(resultPerPage).skip(skip)
        return this;
    }
};

module.exports = ApiFeatures