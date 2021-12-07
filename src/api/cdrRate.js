import service from '@/utils/request'

// @Tags CdrRate
// @Summary 创建CdrRate
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CdrRate true "创建CdrRate"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /cdrRate/createCdrRate [post]
export const createCdrRate = (data) => {
  return service({
    url: '/cdrRate/createCdrRate',
    method: 'post',
    data
  })
}

// @Tags CdrRate
// @Summary 删除CdrRate
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CdrRate true "删除CdrRate"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /cdrRate/deleteCdrRate [delete]
export const deleteCdrRate = (data) => {
  return service({
    url: '/cdrRate/deleteCdrRate',
    method: 'delete',
    data
  })
}

// @Tags CdrRate
// @Summary 删除CdrRate
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除CdrRate"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /cdrRate/deleteCdrRate [delete]
export const deleteCdrRateByIds = (data) => {
  return service({
    url: '/cdrRate/deleteCdrRateByIds',
    method: 'delete',
    data
  })
}

// @Tags CdrRate
// @Summary 更新CdrRate
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CdrRate true "更新CdrRate"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /cdrRate/updateCdrRate [put]
export const updateCdrRate = (data) => {
  return service({
    url: '/cdrRate/updateCdrRate',
    method: 'put',
    data
  })
}

// @Tags CdrRate
// @Summary 用id查询CdrRate
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.CdrRate true "用id查询CdrRate"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /cdrRate/findCdrRate [get]
export const findCdrRate = (params) => {
  return service({
    url: '/cdrRate/findCdrRate',
    method: 'get',
    params
  })
}

// @Tags CdrRate
// @Summary 分页获取CdrRate列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取CdrRate列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /cdrRate/getCdrRateList [get]
export const getCdrRateList = (params) => {
  return service({
    url: '/cdrRate/getCdrRateList',
    method: 'get',
    params
  })
}
