import { Model, DataTypes, Sequelize } from 'sequelize';

export class ShiftKpi extends Model {
  id?: string;
  productionObTotal?: number;
  truckCycleCountTotal?: number;
  loadingTimeShiftAvg?: number;
  spottingTimeShiftAvg?: number;
  queueingTimeShiftAvg?: number;
  hangingTimeShiftAvg?: number;
  dumpingTimeShiftAvg?: number;
  spottingDumpingTimeShiftAvg?: number;
  speedShiftAvg?: number;
  cycleTimeShiftAvg?: number;
  percentageUnlockedShiftAvg?: number;
  payloadShiftAvg?: number;
  haulDistanceShiftAvg?: number;
  loadingTimeRollingAvg?: number;
  spottingTimeRollingAvg?: number;
  queueingTimeRollingAvg?: number;
  hangingTimeRollingAvg?: number;
  dumpingTimeRollingAvg?: number;
  spottingDumpingTimeRollingAvg?: number;
  speedRollingAvg?: number;
  cycleTimeRollingAvg?: number;
  percentageUnlockedRollingAvg?: number;
  payloadRollingAvg?: number;
  haulDistanceRollingAvg?: number;
  lastExcavator?: string;
  lastLocation?: string;
  lastLoadType?: string;
  lastPit?: string;
  lastOperatorId?: string;
  lastOperatorName?: string;
  equipmentStatus?: string;
  reasonName?: string;
  productivity?: number;
  equipmentBrand?: string;
  aggrLevel?: string;
  aggrHierarchy?: number;
  shiftDate?: string;
  shiftStartTime?: string;
  shiftType?: string;
  timestamp?: number;
  physicalAvailability?: number;
  usage?: number;
  utilization?: number;
  excavatorCount?: number;
  truckCount?: number;
  lastStatusReasonDuration?: number;
  productionOBTotalRolling?: number;
  truckCountRolling?: number;
  productivityRolling?: number;
  physicalAvailabilityRolling?: number;
  usageRolling?: number;
  utilizationRolling?: number;
}

export default (sequelize: Sequelize) => {
  ShiftKpi.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: true,
        field: 'ID',
      },
      productionObTotal: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Production_OB_Total',
      },
      truckCycleCountTotal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'Truck_Cycle_Count_Total',
      },
      loadingTimeShiftAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Loading_Time_Shift_Avg',
      },
      spottingTimeShiftAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Spotting_Time_Shift_Avg',
      },
      queueingTimeShiftAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Queueing_Time_Shift_Avg',
      },
      hangingTimeShiftAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Hanging_Time_Shift_Avg',
      },
      dumpingTimeShiftAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Dumping_Time_Shift_Avg',
      },
      spottingDumpingTimeShiftAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Spotting_Dumping_Time_Shift_Avg',
      },
      speedShiftAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Speed_Shift_Avg',
      },
      cycleTimeShiftAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Cycle_Time_Shift_Avg',
      },
      percentageUnlockedShiftAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Percentage_Unlocked_Shift_Avg',
      },
      payloadShiftAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Payload_Shift_Avg',
      },
      haulDistanceShiftAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Haul_Distance_Shift_Avg',
      },
      loadingTimeRollingAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Loading_Time_Rolling_Avg',
      },
      spottingTimeRollingAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Spotting_Time_Rolling_Avg',
      },
      queueingTimeRollingAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Queueing_Time_Rolling_Avg',
      },
      hangingTimeRollingAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Hanging_Time_Rolling_Avg',
      },
      dumpingTimeRollingAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Dumping_Time_Rolling_Avg',
      },
      spottingDumpingTimeRollingAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Spotting_Dumping_Time_Rolling_Avg',
      },
      speedRollingAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Speed_Rolling_Avg',
      },
      cycleTimeRollingAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Cycle_Time_Rolling_Avg',
      },
      percentageUnlockedRollingAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Percentage_Unlocked_Rolling_Avg',
      },
      payloadRollingAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Payload_Rolling_Avg',
      },
      haulDistanceRollingAvg: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Haul_Distance_Rolling_Avg',
      },
      lastExcavator: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Last_Excavator',
      },
      lastLocation: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Last_Location_ID',
      },
      lastLoadType: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Last_Load_Type',
      },
      lastPit: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Last_Pit',
      },
      lastOperatorId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Last_Operator_ID',
      },
      lastOperatorName: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Last_Operator_Name',
      },
      equipmentStatus: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Equipment_Status',
      },
      reasonName: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Reason_Name',
      },
      productivity: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Productivity',
      },
      equipmentBrand: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Equipment_Brand',
      },
      aggrLevel: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Aggr_Level',
      },
      aggrHierarchy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'Aggr_Hierarchy',
      },
      shiftDate: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Shift_Date',
      },
      shiftStartTime: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Shift_Start_Time',
      },
      shiftType: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'Shift_Type',
      },
      timestamp: {
        type: DataTypes.BIGINT,
        allowNull: true,
        field: 'Timestamp',
      },
      physicalAvailability: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Physical_Availability',
      },
      usage: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Usage',
      },
      utilization: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Utilization',
      },
      excavatorCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'Excavator_Count',
      },
      truckCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'Truck_Count',
      },
      lastStatusReasonDuration: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Last_Status_Reason_Duration',
      },
      productionOBTotalRolling: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Production_OB_Rolling_Total',
      },
      truckCountRolling: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Truck_Count_Rolling_Total',
      },
      productivityRolling: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Productivity_Rolling',
      },
      physicalAvailabilityRolling: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Physical_Availability_Rolling',
      },
      usageRolling: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Usage_Rolling',
      },
      utilizationRolling: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'Utilization_Rolling',
      },
    },
    {
      sequelize,
      timestamps: false,
      tableName: 'shift_kpi',
    }
  );
  return ShiftKpi;
};
