user  Famlk
passFTP =       

Directory  = /home/matinra1/amelk.ir/Famlk

FTP Username: Famlk@amelk.ir
FTP server: ftp.matinraisi.ir
FTP & explicit FTPS port:  21


{% extends "user/dashbord/parent/base.html" %}
{% load static %}
{% block title %}ثبت آگهی{% endblock title %}

{% block content %}
<div class="main-content">
    <div class="main-content-inner">
        <form method="POST" enctype="multipart/form-data">
            {% csrf_token %}
            
            <!-- اطلاعات اصلی -->
            <div class="widget-box-2 mb-20">
                <h5 class="title">اطلاعات</h5>
                <div class="box-info-property">
                    <fieldset class="box box-fieldset">
                        <label>عنوان:<span>*</span></label>
                        <input class="form-control" name="title" placeholder="انتخاب کردن" type="text" required>
                    </fieldset>
                    <div class="box grid-3 gap-30">
                        <!-- نوع ملک -->
                        <fieldset class="box-fieldset">
                            <label>نوع ملک:<span>*</span></label>
                            <select class="form-control" name="property_type" required>
                                <option value="" disabled selected>انتخاب کنید</option>
                                <option value="apartment">آپارتمان</option>
                                <option value="villa">ویلا</option>
                                <option value="land">زمین</option>
                            </select>
                        </fieldset>

                        <!-- کاربری ملک -->
                        <fieldset class="box-fieldset">
                            <label>کاربری ملک:<span>*</span></label>
                            <select class="form-control" name="property_usage" required>
                                <option value="" disabled selected>انتخاب کنید</option>
                                <option value="residential">مسکونی</option>
                                <option value="commercial">تجاری</option>
                                <option value="administrative">اداری</option>
                            </select>
                        </fieldset>

                        <!-- نوع آگهی -->
                        <fieldset class="box-fieldset">
                            <label>نوع آگهی:<span>*</span></label>
                            <select class="form-control" name="ad_type" required>
                                <option value="" disabled selected>انتخاب کنید</option>
                                <option value="sale">فروش</option>
                                <option value="rent">اجاره</option>
                                <option value="buy">خرید</option>
                                <option value="mortgage">رهن</option>
                            </select>
                        </fieldset>
                    </div>

                    <!-- شهر و کد پستی -->
                    <div class="box grid-3 gap-30">
                        <fieldset class="box-fieldset">
                            <label>شهر/شهرستان:<span>*</span></label>
                            <input class="form-control" name="city" placeholder="شهر خود را وارد کنید" type="text" required>
                        </fieldset>
                        <fieldset class="box-fieldset">
                            <label>کد پستی:<span>*</span></label>
                            <input class="form-control" name="postal_code" placeholder="کد پستی را وارد کنید" type="text" required>
                        </fieldset>
                    </div>

                    <!-- آدرس کامل -->
                    <div class="box box-fieldset">
                        <label>آدرس کامل:<span>*</span></label>
                        <input id="location-input" class="form-control" name="address" placeholder="آدرس را وارد کنید" type="text" required>
                    </div>
                </div>
            </div>

            <!-- بارگذاری تصاویر -->
            <div class="widget-box-2 mb-20">
                <h5 class="title">رسانه بارگذاری</h5>
                <div class="box-uploadfile text-center">
                    <input type="file" name="images" class="ip-file" multiple>
                    <p class="file-name fw-5">حداکثر 10 عکس را انتخاب کنید</p>
                </div>
            </div>

            <!-- اطلاعات تکمیلی -->
            <div class="widget-box-2 mb-20">
                <h5 class="title">اطلاعات تکمیلی</h5>
                <div class="box grid-3 gap-30">
                    <fieldset class="box-fieldset">
                        <label>اندازه (متر مربع):<span>*</span></label>
                        <input class="form-control" name="size" type="text" required>
                    </fieldset>
                    <fieldset class="box-fieldset">
                        <label>اتاق‌ها:<span>*</span></label>
                        <input class="form-control" name="rooms" type="text" required>
                    </fieldset>
                    <fieldset class="box-fieldset">
                        <label>اتاق خواب‌ها:<span>*</span></label>
                        <input class="form-control" name="bedrooms" type="text" required>
                    </fieldset>
                </div>
            </div>

            <!-- دکمه ارسال -->
            <div class="widget-box-2 text-center">
                <button class="btn-submit" type="submit">ثبت آگهی</button>
            </div>
        </form>
    </div>
</div>
{% endblock content %}
