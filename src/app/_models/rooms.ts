export interface Campus {
  campus_id: number;
  campusName: string;
}

export interface Room {
  structure_id: number;
  campus_id: number;
  lot: string | null;
  buildingName: string;
  floorName: string;
  roomName: string;
  isBuilding: boolean;
  isFloor: boolean;
  isRoom: boolean;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  campus: Campus;
  fullStructureDetails: string;
}
