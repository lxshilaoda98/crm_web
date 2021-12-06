import service from '@/utils/request'

// @Tags SipRegistrations
// @Summary 创建SipRegistrations
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SipRegistrations true "创建SipRegistrations"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sipRegistrations/createSipRegistrations [post]
export const createSipRegistrations = (data) => {
  return service({
    url: '/sipRegistrations/createSipRegistrations',
    method: 'post',
    data
  })
}

// @Tags SipRegistrations
// @Summary 删除SipRegistrations
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SipRegistrations true "删除SipRegistrations"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /sipRegistrations/deleteSipRegistrations [delete]
export const deleteSipRegistrations = (data) => {
  return service({
    url: '/sipRegistrations/deleteSipRegistrations',
    method: 'delete',
    data
  })
}

// @Tags SipRegistrations
// @Summary 删除SipRegistrations
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除SipRegistrations"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /sipRegistrations/deleteSipRegistrations [delete]
export const deleteSipRegistrationsByIds = (data) => {
  return service({
    url: '/sipRegistrations/deleteSipRegistrationsByIds',
    method: 'delete',
    data
  })
}

// @Tags SipRegistrations
// @Summary 更新SipRegistrations
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SipRegistrations true "更新SipRegistrations"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /sipRegistrations/updateSipRegistrations [put]
export const updateSipRegistrations = (data) => {
  return service({
    url: '/sipRegistrations/updateSipRegistrations',
    method: 'put',
    data
  })
}

// @Tags SipRegistrations
// @Summary 用id查询SipRegistrations
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.SipRegistrations true "用id查询SipRegistrations"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /sipRegistrations/findSipRegistrations [get]
export const findSipRegistrations = (params) => {
  return service({
    url: '/sipRegistrations/findSipRegistrations',
    method: 'get',
    params
  })
}

// @Tags SipRegistrations
// @Summary 分页获取SipRegistrations列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取SipRegistrations列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /sipRegistrations/getSipRegistrationsList [get]
export const getSipRegistrationsList = (params) => {
  return service({
    url: '/sipRegistrations/getSipRegistrationsList',
    method: 'get',
    params
  })
}
