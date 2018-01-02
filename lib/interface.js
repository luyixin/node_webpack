//���ݿ�ģ��
var adminSchema = sql.Schema({
    username: String,
    password: String,
    name: String,
    role: String,
    department: String,
    orderno: Number,
    flag: String,
    status: String
});
//���ݿ�ģ��
var adminModel = sql.model('admin', adminSchema, 'admin');
//��ҳ
//adminModelΪ���ݿ�ģ�ͣ��Լ����Ը���
function adminShow(page, res,username) {
    var pagesize = 5;
    adminModel.count({},  (err, count) => {
        adminModel.find({}, null, {sort: {"orderno": 1}},  (err, data) => {
            data.push({"count": count}, {"pagesize": pagesize});
            if(username){
                data.push({"username":username})
            }
            res.send(data);
        }).skip((page - 1) * pagesize).limit(pagesize);
    });
}
//�����ҳ�ӿ�
router.get('/admin_show.html',  (req, res) => {
    var page = parseInt(req.query.page);
    adminShow(page, res);
});

//�����������
router.post('/admin_new.html',  (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var name = req.body.name;
    var department = req.body.department;
    var flag = req.body.flag;
    var status = req.body.status;
    var role = req.body.role;
    var orderno = req.body.orderno;
    var page = parseInt(req.body.page);

    var data = new adminModel({
        username: username,
        password: password,
        name: name,
        role: role,
        department: department,
        flag: flag,
        status: status,
        orderno: orderno
    });
    data.save( (err) => {
        if (err) {
            res.send("0")
        } else {
            // adminModel.find({},null,{sort:{"orderno":1}},function (err,data) {
            //   res.send(data);
            //   // console.log(data);
            // })
            adminShow(page, res);
        }
    })
});