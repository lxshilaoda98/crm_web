import service from '@/utils/request'

// @Tags CdrLine
// @Summary 创建CdrLine
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CdrLine true "创建CdrLine"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /cdrLine/createCdrLine [post]
export const createCdrLine = (data) => {
  return service({
    url: '/cdrLine/createCdrLine',
    method: 'post',
    data
  })
}

// @Tags CdrLine
// @Summary 删除CdrLine
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CdrLine true "删除CdrLine"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /cdrLine/deleteCdrLine [delete]
export const deleteCdrLine = (data) => {
  return service({
    url: '/cdrLine/deleteCdrLine',
    method: 'delete',
    data
  })
}

// @Tags CdrLine
// @Summary 删除CdrLine
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除CdrLine"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /cdrLine/deleteCdrLine [delete]
export const deleteCdrLineByIds = (data) => {
  return service({
    url: '/cdrLine/deleteCdrLineByIds',
    method: 'delete',
    data
  })
}

// @Tags CdrLine
// @Summary 更新CdrLine
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CdrLine true "更新CdrLine"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /cdrLine/updateCdrLine [put]
export const updateCdrLine = (data) => {
  return service({
    url: '/cdrLine/updateCdrLine',
    method: 'put',
    data
  })
}

// @Tags CdrLine
// @Summary 用id查询CdrLine
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.CdrLine true "用id查询CdrLine"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /cdrLine/findCdrLine [get]
export const findCdrLine = (params) => {
  return service({
    url: '/cdrLine/findCdrLine',
    method: 'get',
    params
  })
}

// @Tags CdrLine
// @Summary 分页获取CdrLine列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取CdrLine列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /cdrLine/getCdrLineList [get]
export const getCdrLineList = (params) => {
  return service({
    url: '/cdrLine/getCdrLineList',
    method: 'get',
    params
  })
}
