-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2012 at 08:08 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

-- Table structure for table `reg_users`
CREATE TABLE IF NOT EXISTS `reg_users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `cpf` VARCHAR(11) NOT NULL,
  `user_name` VARCHAR(150) NOT NULL,
  `password_register` VARCHAR(70) NOT NULL,
  `mac_address` VARCHAR(25) NOT NULL,
  `ip_address` VARCHAR(45) NOT NULL,
  `contribution_period` VARCHAR(45) NOT NULL,
  `registration_date` DATE NOT NULL,
  `expiration_date` DATE NOT NULL,
  `active` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;
