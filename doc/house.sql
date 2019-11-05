/*
Navicat MySQL Data Transfer

Source Server         : hsg
Source Server Version : 50530
Source Host           : localhost:3306
Source Database       : house

Target Server Type    : MYSQL
Target Server Version : 50530
File Encoding         : 65001

Date: 2017-06-05 15:27:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `bill`
-- ----------------------------
DROP TABLE IF EXISTS `bill`;
CREATE TABLE `bill` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `renterName` varchar(50) DEFAULT NULL,
  `room` varchar(50) DEFAULT NULL,
  `income` varchar(10) DEFAULT NULL,
  `cost` int(20) DEFAULT NULL,
  `operater` varchar(20) DEFAULT NULL,
  `operateDate` date DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `endTime` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bill
-- ----------------------------
INSERT INTO `bill` VALUES ('27', '张三', 'B栋1206', '收入', '1000', 'hu', '2017-06-04', null, '2017-07-04');
INSERT INTO `bill` VALUES ('28', '李四', 'B栋1203', '收入', '1200', 'hu', '2017-06-04', null, '2017-07-04');
INSERT INTO `bill` VALUES ('29', '王二', 'B栋1101', '收入', '1500', 'hu', '2017-06-04', null, '2017-07-04');
INSERT INTO `bill` VALUES ('30', '张三', 'B栋1206', '收入', '1000', 'hu', '2017-06-04', null, '2017-08-03');
INSERT INTO `bill` VALUES ('31', '李离', 'D栋1204', '收入', '2300', 'hu', '2017-06-04', null, '2017-07-04');
INSERT INTO `bill` VALUES ('32', '王四', 'D栋1203', '收入', '1300', 'hu', '2017-06-04', null, '2017-07-04');
INSERT INTO `bill` VALUES ('33', '李白', 'A栋0604', '收入', '700', 'hu', '2017-06-04', null, '2017-07-04');
INSERT INTO `bill` VALUES ('34', '李四', 'B栋1203', '收入', '400', 'hu', '2017-06-04', null, '2017-6-28');
INSERT INTO `bill` VALUES ('35', '周一', 'A栋1204', '收入', '490', null, '2017-06-04', null, '2017-6-2');
INSERT INTO `bill` VALUES ('36', '李丽', 'C栋1203', '收入', '3000', 'li', '2017-06-04', null, '2017-07-04');
INSERT INTO `bill` VALUES ('37', 'hu1', 'D栋1501', '收入', '1400', 'hu', '2017-06-05', null, '2017-07-05');
INSERT INTO `bill` VALUES ('38', '周一', 'A栋1204', '收入', '900', 'hu', '2017-06-05', null, '2017-07-02');
INSERT INTO `bill` VALUES ('39', 'test1', 'D1701', '收入', '1400', 'hu', '2017-06-05', null, '2017-07-05');
INSERT INTO `bill` VALUES ('40', '周一', 'A栋1204', '收入', '300', null, '2017-06-05', null, '2017-6-30');

-- ----------------------------
-- Table structure for `contract`
-- ----------------------------
DROP TABLE IF EXISTS `contract`;
CREATE TABLE `contract` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `renterName` varchar(50) DEFAULT NULL,
  `room` varchar(50) DEFAULT NULL,
  `startTime` date DEFAULT NULL,
  `endTime` date DEFAULT NULL,
  `descc` varchar(1024) DEFAULT NULL,
  `statuss` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `operater` varchar(50) DEFAULT NULL,
  `operateDate` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of contract
-- ----------------------------
INSERT INTO `contract` VALUES ('4', '李明', 'C栋1108', '2017-05-03', '2017-06-03', '无', '租赁中', null, 'li', '2017-05-03');
INSERT INTO `contract` VALUES ('6', '郭达', 'C栋1107', '2017-04-30', '2017-05-30', '无', '租赁中', null, 'hu', '2017-04-30');
INSERT INTO `contract` VALUES ('50', '李四', 'B栋1203', '2017-06-04', '2017-06-28', '正', '退房中', null, 'hu', '2017-06-04');
INSERT INTO `contract` VALUES ('51', '王二', 'B栋1101', '2017-06-04', '2017-07-04', '正', null, null, 'hu', '2017-06-04');
INSERT INTO `contract` VALUES ('52', '周一', 'A栋1204', '2017-04-26', '2017-06-30', '无', '退房中', null, 'hu', '2017-05-26');
INSERT INTO `contract` VALUES ('53', '李涛', 'A栋1102', '2017-04-28', '2017-05-28', '正常', '租赁中', null, 'hu', '2017-05-28');
INSERT INTO `contract` VALUES ('54', '李达', 'A栋1206', '2017-05-01', '2017-06-01', '无', '租赁中', null, 'li', '2017-05-01');
INSERT INTO `contract` VALUES ('55', '李显', 'C栋0508', '2017-06-02', '2017-06-02', '无', '租赁中', null, 'li', '2017-05-02');
INSERT INTO `contract` VALUES ('57', '王四', 'D栋1203', '2017-06-04', '2017-07-04', '正常', '租赁中', null, 'hu', '2017-06-04');
INSERT INTO `contract` VALUES ('60', 'hu1', 'D栋1501', '2017-06-05', '2017-07-05', '正常', '租赁中', null, 'hu', '2017-06-05');
INSERT INTO `contract` VALUES ('61', 'test1', 'D1701', '2017-06-05', '2017-07-05', '正常', '租赁中', null, 'hu', '2017-06-05');

-- ----------------------------
-- Table structure for `renter`
-- ----------------------------
DROP TABLE IF EXISTS `renter`;
CREATE TABLE `renter` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `room` varchar(50) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `descc` varchar(50) DEFAULT NULL,
  `idCard` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of renter
-- ----------------------------
INSERT INTO `renter` VALUES ('12', '李明', 'C栋1108', '13156789876', '无', '4223251997');
INSERT INTO `renter` VALUES ('14', '郭达', 'C栋1107', '13245678765', '无', '4223251993');
INSERT INTO `renter` VALUES ('29', '张三', 'B栋1206', '13145678907', '无', '4223251991');
INSERT INTO `renter` VALUES ('30', '李四', 'B栋1203', '15412212897', '无', '4223251993');
INSERT INTO `renter` VALUES ('31', '王二', 'B栋1101', '13167896547', '无', '4232311991');
INSERT INTO `renter` VALUES ('32', '周一', 'A栋1204', '15467851234', '无', '4223251995');
INSERT INTO `renter` VALUES ('33', '李涛', 'A栋1102', '14356788765', '无', '4223211993');
INSERT INTO `renter` VALUES ('34', '李达', 'A栋1206', '13122123456', '无', '42232519930689');
INSERT INTO `renter` VALUES ('35', '李显', 'C栋0508', '15467897654', '无', '4223251994');
INSERT INTO `renter` VALUES ('36', '李离', 'D栋1204', '13678901234', '', '4223251993');
INSERT INTO `renter` VALUES ('37', '王四', 'D栋1203', '17656788765', '', '5223251990');
INSERT INTO `renter` VALUES ('40', 'hu1', 'D栋1501', '14166788765', '', '4223251993');
INSERT INTO `renter` VALUES ('41', 'test1', 'D1701', '141', '', '422325');

-- ----------------------------
-- Table structure for `room`
-- ----------------------------
DROP TABLE IF EXISTS `room`;
CREATE TABLE `room` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `rname` varchar(50) DEFAULT NULL,
  `price` int(20) DEFAULT NULL,
  `picture` varchar(500) DEFAULT NULL,
  `payWays` varchar(50) DEFAULT NULL,
  `descc` varchar(1024) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `statuss` varchar(20) DEFAULT NULL,
  `operateDate` varchar(50) DEFAULT NULL,
  `operater` varchar(50) DEFAULT NULL,
  `renterName` varchar(50) DEFAULT NULL,
  `size` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of room
-- ----------------------------
INSERT INTO `room` VALUES ('1', 'B栋1206', '1000', 'roomImages/1.JPG', '押一付一', '22平米精装修', '朝阳区', '租赁中', null, null, null, '22');
INSERT INTO `room` VALUES ('2', 'B栋1203', '1200', 'roomImages/2.JPG', '押一付一', '25平米精装修', '朝阳区', '退房中', null, null, null, '25');
INSERT INTO `room` VALUES ('3', 'B栋1101', '1500', 'roomImages/3.JPG', '押一付三', '20平米精装修', null, '租赁中', null, null, null, '20');
INSERT INTO `room` VALUES ('4', 'A栋1204', '900', 'roomImages/4.JPG', '押一付一', '15平米精装修', null, '退房中', null, null, null, '15');
INSERT INTO `room` VALUES ('5', 'A栋1102', '1400', 'roomImages/5.JPG', '押一付一', '20平米精装修', null, '租赁中', null, null, null, '20');
INSERT INTO `room` VALUES ('6', 'A栋1206', '1600', 'roomImages/6.JPG', '押一付三', '25平米精装修', null, '租赁中', null, null, null, '25');
INSERT INTO `room` VALUES ('7', 'C栋0508', '2200', 'roomImages/7.JPG', '押一付三', '40平米精装修', null, '租赁中', null, null, null, '40');
INSERT INTO `room` VALUES ('8', 'C栋1108', '2500', 'roomImages/8.JPG', '押一付三', '25平米主卧', null, '租赁中', null, null, null, '25');
INSERT INTO `room` VALUES ('9', 'C栋1107', '2800', 'roomImages/9.JPG', '押一付三', '28平米主卧', null, '租赁中', null, null, null, '28');
INSERT INTO `room` VALUES ('10', 'C栋1203', '3000', 'roomImages/10.jpg', '押一付三', '35平米主卧', null, '空闲中', null, null, null, '35');
INSERT INTO `room` VALUES ('11', 'A栋0604', '700', 'roomImages/11.JPG', '押一付一', '12平米精装修', null, '空闲中', null, null, null, '12');
INSERT INTO `room` VALUES ('16', 'D栋1203', '1300', 'roomImages/1496588140169536.JPG', '押一付一', '无', null, '租赁中', '2017-06-04', null, null, '20');
INSERT INTO `room` VALUES ('17', 'D栋1204', '2300', 'roomImages/1496588438910227.JPG,roomImages/1496588438975632.JPG', '押一付一', '21平米精装修单间', null, '租赁中', '2017-06-04', 'hu', null, '21');
INSERT INTO `room` VALUES ('18', 'D栋1301', '1200', 'roomImages/1496590474892548.JPG,roomImages/1496590474953865.JPG', '押一付一', '21平米精装修', null, '空闲', '2017-06-04', 'li', null, '21');
INSERT INTO `room` VALUES ('19', 'D栋1306', '1400', 'roomImages/1496590599554691.JPG', '押一付一', '23平米精装修', null, '空闲', '2017-06-04', 'li', null, '23');
INSERT INTO `room` VALUES ('20', 'D栋1501', '1400', 'roomImages/1496590690498633.JPG,roomImages/1496590690620289.JPG', '押一付三', '15平米精装', null, '租赁中', '2017-06-04', 'hu', null, '15');
INSERT INTO `room` VALUES ('21', 'D栋1578', '1300', 'roomImages/1496590768106875.JPG,roomImages/1496590768223377.JPG', '押一付一', '16平米精装修', null, '空闲', '2017-06-04', 'hu', null, '16');
INSERT INTO `room` VALUES ('22', 'D栋1901', '1500', 'roomImages/1496590798274382.JPG,roomImages/1496590798326424.JPG', '押一付一', '19平米精装修', null, '空闲', '2017-06-04', 'hu', null, '19');
INSERT INTO `room` VALUES ('23', 'D栋1902', '1300', 'roomImages/1496590821402292.JPG', '押一付一', '12平米单间', null, '空闲', '2017-06-04', 'hu', null, '12');
INSERT INTO `room` VALUES ('24', 'D1701', '1400', 'roomImages/1496594695518792.JPG', '押一付一', '12平米', null, '租赁中', '2017-06-05', 'hu', null, '12');
INSERT INTO `room` VALUES ('25', 'test2', '1900', 'roomImages/1496634436307104.jpg,roomImages/1496634436389797.JPG', '押一付三', '21平米', null, '空闲', '2017-06-05', 'hu', null, '21');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `uname` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'hu', 'hu', '男', '151');
INSERT INTO `users` VALUES ('2', 'li', '123', '女', '131');
