const main = async (req, res) => {
    try {
        const ACMClient = require('acm-client').ACMClient;
        const acm = new ACMClient({
            endpoint: 'acm.aliyun.com', // Available in the ACM console
            namespace: '6be9e4fb-4e2f-40f8-9eb4-5e7c4be7dfec', // Available in the ACM console
            accessKey: '5ed90cbfc7fa4191b7271825990b0722', // Available in the ACM console
            secretKey: 'WRkq80GJiP+zN5tMWfaIUy7a4Sg=', // Available in the ACM console
            requestTimeout: 10000, // Request timeout, 6s by default
        });
        const group = await acm.getConfigs();
        let result = []
        for (let k of group) {
            const content = await acm.getConfig(k.dataId, k.group);
            result.push(JSON.parse(content))
        }
        
        res.render('index.ejs', {
            dataArr: result
        })
    } catch (err) {
        res.send("页面丢失了，请重试")
    }
}

const index = async (req, res) => {
    try {
        const body = req.body;

        const name = JSON.parse(body.content).base.tj_channel
        const text = JSON.parse(body.content)
        console.log(JSON.stringify(text,null,5))


        const ACMClient = require('acm-client').ACMClient;
        const acm = new ACMClient({
            endpoint: 'acm.aliyun.com', // Available in the ACM console
            namespace: '6be9e4fb-4e2f-40f8-9eb4-5e7c4be7dfec', // Available in the ACM console
            accessKey: '5ed90cbfc7fa4191b7271825990b0722', // Available in the ACM console
            secretKey: 'WRkq80GJiP+zN5tMWfaIUy7a4Sg=', // Available in the ACM console
            requestTimeout: 10000, // Request timeout, 6s by default
        });
        const content = await acm.publishSingle(name, 'DEFAULT_GROUP', JSON.stringify(text,null,5));
        console.log('getConfig = ', content);

        res.send({
            msg:'success',
            status:200
        })

    } catch (err) {

        res.send({
            msg:'修改失败，请重试',
            status:200
        })
    }

}



module.exports = {
    main,
    index
}